# CurrencyConvertX
This is a simple currency converter application built using Spring Boot for the backend and HTML, CSS, and JavaScript for the frontend.
<h2> Features</h2>
<ul>
    <li>Convert from one currency to another using live exchange rates.</li>
    <li>Supports conversion between USD, INR, EUR, and AUD.</li>
    <li>Validates user input and displays error messages for invalid input.</li>
</ul>
<h2>Technologies Used</h2>
<ul>
  <li>Backend: Java, Spring Boot</li>
  <li>Frontend: HTML, CSS, JavaScript</li>
  <li>External APIs: Flags API for country flags</li>
</ul>

<h2>API Overview</h2>
The currency converter API allows users to convert an amount from one currency to another based on the latest exchange rates. The API is built using Spring Boot and follows a RESTful architecture.

<h2>Endpoints</h2>
<h4>Convert Currency</h4>
<ul>
  <li>Endpoint: `/convert/{amount}/{fromCurrency}/{toCurrency}`</li>
<li>Method: GET</li>
  <li>Description: Converts the specified amount from the fromCurrency to the toCurrency.</li>
  <li>Example: /convert/100/USD/INR converts 100 USD to INR.</li>
</ul>
<h2>Acknowledgments</h2>
External APIs: Flags API for country flags
<h2>Currency Support</h2>
The API provides conversion support for the following currencies:
<li>USD (United States Dollar)</li>
<li>INR (Indian Rupee)</li>
<li>EUR (Euro)</li>
<li>AUD (Australian Dollar)</li>

