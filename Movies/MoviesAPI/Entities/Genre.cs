using System.ComponentModel.DataAnnotations;
using MoviesAPI.Validations;

namespace MoviesAPI.Entities;
public class Genre
{
    public int Id { get; set; }
    [Required(ErrorMessage = "The field {0} is required")]
    [FirstLetterUppercase]
    public string? Name { get; set; }
}