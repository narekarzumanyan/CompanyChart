using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using Microsoft.SharePoint;
using Microsoft.Office.Server.UserProfiles;
using CustomChartWebPart.VisualChartWebPart;
using System.Collections.Generic;
using System.Text;

namespace CustomChartWebPart.VisualWebPart1
{
    public partial class VisualWebPart1UserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            SPSite site;
            SPWeb web;
            SPServiceContext serviceContext;
            UserProfileManager profiles;
            UserProfile userProfile;
            this.lblError.Visible = false;
            //////////////////// _postBack   /////////////////////
            string parameter = Request["__EVENTARGUMENT"];
            string idString = string.Empty;
            string actionType = string.Empty;

            if (!string.IsNullOrEmpty(parameter))
            {
                string[] parameters = parameter.Split('|');
                if (parameters.Length > 1)
                {
                    idString = parameters[0];
                    actionType = parameters[1];
                }
            }

            try
            {
                using (site = new SPSite(SPContext.Current.Web.Url))
                {
                    using (web = site.OpenWeb())
                    {
                        serviceContext = SPServiceContext.GetContext(site);
                        profiles = new UserProfileManager(serviceContext);

                        /////////// Redirect to user page ///////////////////////
                        if (actionType == "redirect")
                        {
                            UserProfile redirectUserProfile = profiles.GetUserProfile(new Guid(idString));
                            string redirectUserPageUrl = redirectUserProfile.PublicUrl.ToString();
                            Page.Response.Redirect(redirectUserPageUrl, false);
                        }

                        ChartCurentStateModel curentModel = new ChartCurentStateModel();

                        /////////// first Load ///////////////////////
                        if (string.IsNullOrEmpty(actionType))
                        {
                            string curentUser = Request.QueryString["accountname"];                           
                            userProfile = profiles.GetUserProfile(curentUser);
                            UserProfile manager = userProfile;
                           
                            List<UserProfile> directReports = new List<UserProfile>(manager.GetDirectReports());
                            curentModel.Manager = manager;
                            curentModel.directReports = directReports;
                            this.ActivTab.Value = "0";
                        }
                        else
                        {
                            userProfile = profiles.GetUserProfile(new Guid(idString));

                            if (actionType == "manager")
                            {
                                UserProfile manager = userProfile.GetManager();
                                if (manager == null)
                                {
                                    manager = userProfile;
                                }
                                List<UserProfile> directReports = new List<UserProfile>(manager.GetDirectReports());
                                curentModel.Manager = manager;
                                curentModel.directReports = directReports;
                            }
                            else
                            {
                                UserProfile manager = userProfile;
                                List<UserProfile> directReports = new List<UserProfile>(manager.GetDirectReports());
                                curentModel.Manager = manager;
                                curentModel.directReports = directReports;
                            }
                            this.ActivTab.Value = "1";
                        }
                        DrowChart(curentModel);
                    }
                }
            }
            catch (Exception ex)
            {
                lblError.Text = ex.Message;
                lblError.Visible = true;
            }
        }
        public void DrowChart(ChartCurentStateModel curentModel)
        {
            StringBuilder chartHtml = new StringBuilder();
            chartHtml.Append("<div class='tree'><ul><li class='1'>");

            /////////// Drow Manager ///////////////////////            
            chartHtml.Append("<a class='clearfix' href='#'>");
            chartHtml.Append(string.Format("<img src='{0}' /><div class='user_name'><h3 onclick=\"__doPostBack('', '{1}|redirect')\">{2}</h3> <p>{3}</p>", curentModel.Manager["PictureUrl"].Value.ToString().Replace("intra/","intranet/"), curentModel.Manager.ID, curentModel.Manager["FirstName"].Value + " " + curentModel.Manager["LastName"].Value, curentModel.Manager["department"].Value));
            chartHtml.Append(" </div>");
            if (curentModel.Manager.GetManager() != null)
            {
                chartHtml.Append(string.Format("<div class='open_close' onclick=\"__doPostBack('', '{0}|manager')\"></div></a>", curentModel.Manager.ID));
            }
            else
            {
                chartHtml.Append("</a>");
            }
            /////////// Drow Reporters ///////////////////////
            if (curentModel.directReports.Count > 0)
            {
                chartHtml.Append("<ul>");
                foreach (UserProfile item in curentModel.directReports)
                {
                    chartHtml.Append("<li class='2'>");
                    chartHtml.Append("<a class='clearfix' href='#'>");
                    chartHtml.Append(string.Format("<img src='{0}' /><div class='user_name'><h3 onclick=\"__doPostBack('', '{1}|redirect')\">{2}</h3> <p>{3}</p>", item[PropertyConstants.PictureUrl].Value.ToString().Replace("intra/", "intranet/"), item.ID, item["FirstName"].Value + " " + item["LastName"].Value, item["department"].Value));
                    chartHtml.Append(" </div>");

                    if (item.GetDirectReports().Length > 0)
                    {
                        chartHtml.Append(string.Format("<div class='open_close' onclick=\"__doPostBack('', '{0}|reporter')\"></div></a>", item.ID));
                    }
                    else
                    {
                        chartHtml.Append("</a>");
                    }
                }
                chartHtml.Append("</ul>");
            }

            chartHtml.Append("</li></ul></div>");
            this.Controls.Add(new Literal() { Text = chartHtml.ToString() });
        }
    }
}
