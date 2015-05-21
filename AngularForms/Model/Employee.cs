using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularForms.Model
{
    public class Employee
    {
        public int id { get; set; }
        public string fullName { get; set; }
        public string notes { get; set; }
        public string department { get; set; }
        public bool perkLaptop { get; set; }
        public bool perkStock { get; set; }
        public bool perkSixWeeks { get; set; }
        public string payrollType { get; set; }
    }
}
