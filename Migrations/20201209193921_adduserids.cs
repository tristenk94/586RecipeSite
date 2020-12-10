using Microsoft.EntityFrameworkCore.Migrations;

namespace recipesiteangthree.Migrations
{
    public partial class adduserids : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "userid",
                table: "Recipe",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "userid",
                table: "Ingredient",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "userid",
                table: "Direction",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "userid",
                table: "Recipe");

            migrationBuilder.DropColumn(
                name: "userid",
                table: "Ingredient");

            migrationBuilder.DropColumn(
                name: "userid",
                table: "Direction");
        }
    }
}
