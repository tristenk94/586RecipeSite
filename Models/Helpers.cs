using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace recipesiteangthree
{
    public class Helpers
    {
        public static string GetRDSConnectionString()
        {
            var appConfig = ConfigurationManager.AppSettings;

            string dbname = appConfig["ebdb"];

            if (string.IsNullOrEmpty(dbname)) return null;

            string username = appConfig["admin"];
            string password = appConfig["password"];
            string hostname = appConfig["recipe-database.ciefsjotkz6e.us-west-1.rds.amazonaws.com"];
            string port = appConfig["1433"];

            return "Data Source=" + hostname + ";Initial Catalog=" + dbname + ";User ID=" + username + ";Password=" + password + ";";
        }
    }
}
