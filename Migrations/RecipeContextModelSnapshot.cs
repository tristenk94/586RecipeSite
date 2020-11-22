﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using RecipeSiteEpic.Data;

namespace RecipeSiteEpic.Migrations
{
    [DbContext(typeof(RecipeContext))]
    partial class RecipeContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("RecipeSiteEpic.Models.Direction", b =>
                {
                    b.Property<int>("stepNumber")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("RecipeId");

                    b.Property<string>("step");

                    b.HasKey("stepNumber");

                    b.HasIndex("RecipeId");

                    b.ToTable("Direction");
                });

            modelBuilder.Entity("RecipeSiteEpic.Models.Ingredient", b =>
                {
                    b.Property<int>("ingredientNum")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("RecipeId");

                    b.Property<string>("ingredientAmount");

                    b.Property<string>("ingredientName");

                    b.Property<int?>("ingredientNum1");

                    b.HasKey("ingredientNum");

                    b.HasIndex("RecipeId");

                    b.HasIndex("ingredientNum1");

                    b.ToTable("Ingredient");
                });

            modelBuilder.Entity("RecipeSiteEpic.Models.Recipe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<string>("Rating")
                        .HasMaxLength(1);

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100);

                    b.Property<DateTime>("UploadDate");

                    b.Property<int>("timesFavorited");

                    b.HasKey("Id");

                    b.ToTable("Recipe");
                });

            modelBuilder.Entity("RecipeSiteEpic.Models.Direction", b =>
                {
                    b.HasOne("RecipeSiteEpic.Models.Recipe")
                        .WithMany("Directions")
                        .HasForeignKey("RecipeId");
                });

            modelBuilder.Entity("RecipeSiteEpic.Models.Ingredient", b =>
                {
                    b.HasOne("RecipeSiteEpic.Models.Recipe")
                        .WithMany("Ingredients")
                        .HasForeignKey("RecipeId");

                    b.HasOne("RecipeSiteEpic.Models.Ingredient")
                        .WithMany("ing")
                        .HasForeignKey("ingredientNum1");
                });
#pragma warning restore 612, 618
        }
    }
}