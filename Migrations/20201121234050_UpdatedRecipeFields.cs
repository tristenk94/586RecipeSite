using Microsoft.EntityFrameworkCore.Migrations;

namespace RecipeSiteEpic.Migrations
{
    public partial class UpdatedRecipeFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ingredientNum1",
                table: "Ingredient",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Ingredient_ingredientNum1",
                table: "Ingredient",
                column: "ingredientNum1");

            migrationBuilder.AddForeignKey(
                name: "FK_Ingredient_Ingredient_ingredientNum1",
                table: "Ingredient",
                column: "ingredientNum1",
                principalTable: "Ingredient",
                principalColumn: "ingredientNum",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Ingredient_Ingredient_ingredientNum1",
                table: "Ingredient");

            migrationBuilder.DropIndex(
                name: "IX_Ingredient_ingredientNum1",
                table: "Ingredient");

            migrationBuilder.DropColumn(
                name: "ingredientNum1",
                table: "Ingredient");
        }
    }
}
