<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> 
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %> 
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="VisualWebPart1UserControl.ascx.cs" Inherits="CustomChartWebPart.VisualWebPart1.VisualWebPart1UserControl" %>
<SharePoint:CssRegistration ID="CssRegistration1" runat="server" Name="/_layouts/images/CustomChartWebPart/CSS/style.css"></SharePoint:CssRegistration>
<SharePoint:ScriptLink ID="ScriptLink1" runat="server" Name="/_layouts/images/CustomChartWebPart/JS/jquery-1.11.2.min.js"></SharePoint:ScriptLink>
<SharePoint:ScriptLink ID="ScriptLink2" runat="server" Name="/_layouts/images/CustomChartWebPart/JS/IE.js"></SharePoint:ScriptLink>
<SharePoint:ScriptLink ID="ScriptLink3" runat="server" Name="/_layouts/images/CustomChartWebPart/JS/all.js"></SharePoint:ScriptLink>

<asp:Label ID="lblError" runat="server" Text="" Visible="false"></asp:Label>

<input id="ActivTab" runat="server" type="hidden" />