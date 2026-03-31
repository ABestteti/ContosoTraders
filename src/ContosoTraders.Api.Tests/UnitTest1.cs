using Microsoft.AspNetCore.Mvc.Testing;
using System.Net;
using System.Net.Http.Json;

namespace ContosoTraders.Api.Tests;

public class ProductsApiTests : IClassFixture<WebApplicationFactory<Program>>
{
    private readonly WebApplicationFactory<Program> _factory;

    public ProductsApiTests(WebApplicationFactory<Program> factory)
    {
        _factory = factory;
    }

    [Fact]
    public async Task GetProducts_ReturnsSuccessStatusCode()
    {
        // Arrange
        var client = _factory.CreateClient();

        // Act
        var response = await client.GetAsync("/api/products");

        // Assert
        response.EnsureSuccessStatusCode();
        Assert.Equal(HttpStatusCode.OK, response.StatusCode);
    }

    [Fact]
    public async Task GetProducts_ReturnsProductsList()
    {
        // Arrange
        var client = _factory.CreateClient();

        // Act
        var products = await client.GetFromJsonAsync<Product[]>("/api/products");

        // Assert
        Assert.NotNull(products);
        Assert.True(products.Length > 0);
        Assert.Contains(products, p => p.Name == "Laptop");
    }
}

public record Product(int Id, string Name, string Description, decimal Price, string Category);
