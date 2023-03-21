using System.ComponentModel.DataAnnotations;
using MoviesAPI.Entities;

namespace MoviesAPI.Validations;

public class FirstLetterUppercaseAttribute: ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null || String.IsNullOrEmpty(value.ToString())) {
            return ValidationResult.Success;
        }

        string firstLetter = value.ToString()[0].ToString();
        if (firstLetter != firstLetter.ToUpper()) {
            return new ValidationResult("First letter must be uppercase");
        }

        return ValidationResult.Success;
    }
}