namespace AngularForms.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class init : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        fullName = c.String(),
                        notes = c.String(),
                        department = c.String(),
                        perkLaptop = c.Boolean(nullable: false),
                        perkStock = c.Boolean(nullable: false),
                        perkSixWeeks = c.Boolean(nullable: false),
                        payrollType = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Employees");
        }
    }
}
