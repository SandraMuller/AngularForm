namespace AngularForms.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AngularForms.DbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AngularForms.DbContext context)
        {

            context.Employees.AddOrUpdate(
              e => e.fullName,
              new AngularForms.Model.Employee { fullName = "Sandra Muller",
                      notes = "The ideal employee ;p",
                      department = "Developer",
                      perkLaptop = true,
                      perkStock = false,
                      perkSixWeeks = true,
                      payrollType = "monthly"
              }
            );
            
        }
    }
}
