using Microsoft.AspNetCore.Http;

namespace fileAPI.DTOs.FileManager
{
    public class FileModelDTO
    {
        public IFormFile MyFile { get; set; }
        public string AltText { get; set; }
        public string Description { get; set; }
    }
}
