﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using recipesiteangthree.ClientApp;

namespace recipesiteangthree.Migrations
{
    [DbContext(typeof(RecipeFinalContext))]
    [Migration("20201209203908_makerecipekey")]
    partial class makerecipekey
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("recipesiteangthree.Direction", b =>
                {
                    b.Property<int>("directionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("RecipeId")
                        .HasColumnType("int");

                    b.Property<int>("recipeLink")
                        .HasColumnType("int");

                    b.Property<string>("step")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("stepNumber")
                        .HasColumnType("int");

                    b.Property<string>("userid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("directionId");

                    b.HasIndex("RecipeId");

                    b.ToTable("Direction");
                });

            modelBuilder.Entity("recipesiteangthree.Ingredient", b =>
                {
                    b.Property<int>("ingredientId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("RecipeId")
                        .HasColumnType("int");

                    b.Property<string>("ingredientAmount")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ingredientName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("recipeLink")
                        .HasColumnType("int");

                    b.Property<string>("userid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ingredientId");

                    b.HasIndex("RecipeId");

                    b.ToTable("Ingredient");
                });

            modelBuilder.Entity("recipesiteangthree.Recipe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Rating")
                        .HasMaxLength(1)
                        .HasColumnType("nvarchar(1)");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime>("UploadDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("userid")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Recipe");
                });

            modelBuilder.Entity("recipesiteangthree.Direction", b =>
                {
                    b.HasOne("recipesiteangthree.Recipe", null)
                        .WithMany("Directions")
                        .HasForeignKey("RecipeId");
                });

            modelBuilder.Entity("recipesiteangthree.Ingredient", b =>
                {
                    b.HasOne("recipesiteangthree.Recipe", null)
                        .WithMany("Ingredients")
                        .HasForeignKey("RecipeId");
                });

            modelBuilder.Entity("recipesiteangthree.Recipe", b =>
                {
                    b.Navigation("Directions");

                    b.Navigation("Ingredients");
                });
#pragma warning restore 612, 618
        }
    }
}
