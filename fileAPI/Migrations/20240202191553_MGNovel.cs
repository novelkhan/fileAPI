using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace fileAPI.Migrations
{
    /// <inheritdoc />
    public partial class MGNovel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AltText",
                table: "FileData",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "FileData",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AltText",
                table: "FileData");

            migrationBuilder.DropColumn(
                name: "Description",
                table: "FileData");
        }
    }
}
