using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Office.Server.UserProfiles;

namespace CustomChartWebPart.VisualChartWebPart
{
    public class ChartCurentStateModel
    {
        public UserProfile Manager { get; set; }

        public List<UserProfile> directReports { get; set; }
    }
}
