﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace recipesiteangthree.Migrations
{
    public partial class FinalUpdateFinal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recipe",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    UploadDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Rating = table.Column<string>(type: "nvarchar(1)", maxLength: 1, nullable: true),
                    userid = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipe", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Direction",
                columns: table => new
                {
                    directionId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    stepNumber = table.Column<int>(type: "int", nullable: false),
                    step = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    recipeLink = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RecipeId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Direction", x => x.directionId);
                    table.ForeignKey(
                        name: "FK_Direction_Recipe_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Ingredient",
                columns: table => new
                {
                    ingredientId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ingredientName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ingredientAmount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    recipeLink = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    userid = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RecipeId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ingredient", x => x.ingredientId);
                    table.ForeignKey(
                        name: "FK_Ingredient_Recipe_RecipeId",
                        column: x => x.RecipeId,
                        principalTable: "Recipe",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Direction_RecipeId",
                table: "Direction",
                column: "RecipeId");

            migrationBuilder.CreateIndex(
                name: "IX_Ingredient_RecipeId",
                table: "Ingredient",
                column: "RecipeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Direction");

            migrationBuilder.DropTable(
                name: "Ingredient");

            migrationBuilder.DropTable(
                name: "Recipe");
        }
    }
}
