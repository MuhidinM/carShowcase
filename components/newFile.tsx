import { render } from "react-dom";

describe("SearchManufacturer", () => {
  // Renders a Combobox with a default value of an empty string.
  it("should render a Combobox with an empty string as the default value", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    // Act
    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );

    // Assert
    expect(screen.getByRole("combobox")).toHaveValue("");
  });

  // Displays a dropdown list of all manufacturers when the Combobox button is clicked.
  it("should display a dropdown list of all manufacturers when the Combobox button is clicked", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );

    // Act
    userEvent.click(screen.getByRole("button"));

    // Assert
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getAllByRole("option")).toHaveLength(manufacturers.length);
  });

  // Filters the list of manufacturers based on the search query entered by the user.
  it("should filter the list of manufacturers based on the search query entered by the user", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );

    // Act
    userEvent.type(screen.getByRole("textbox"), "Audi");

    // Assert
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option")).toHaveTextContent("Audi");
  });

  // Selects a manufacturer from the dropdown list and updates the value of the Combobox.
  it("should select a manufacturer from the dropdown list and update the value of the Combobox", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.click(screen.getByRole("button"));

    // Act
    userEvent.click(screen.getByText("Audi"));

    // Assert
    expect(setManufacturer).toHaveBeenCalledWith("Audi");
    expect(screen.getByRole("combobox")).toHaveValue("Audi");
  });

  // Resets the search query when the dropdown list is closed.
  it("should reset the search query when the dropdown list is closed", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Audi");

    // Act
    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.getByRole("button"));

    // Assert
    expect(screen.getByRole("textbox")).toHaveValue("");
  });

  // Displays a message when there are no results for the search query.
  it("should display a message when there are no results for the search query", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Invalid");

    // Assert
    expect(screen.getByText('No Result for "Invalid"')).toBeInTheDocument();
  });

  // Filters the list of manufacturers case-insensitively.
  it("should filter the list of manufacturers case-insensitively", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "audi");

    // Assert
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option")).toHaveTextContent("Audi");
  });

  // Displays manufacturers with and without spaces in the name.
  it("should display manufacturers with and without spaces in the name", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Land Rover");

    // Assert
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option")).toHaveTextContent("Land Rover");
  });

  // Displays manufacturers with and without special characters in the name.
  it("should display manufacturers with and without special characters in the name", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Mercedes-Benz");

    // Assert
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option")).toHaveTextContent("Mercedes-Benz");
  });

  // Displays manufacturers with and without capitalization in the name.
  it("should display manufacturers with and without capitalization in the name", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "mercedes-benz");

    // Assert
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option")).toHaveTextContent("Mercedes-Benz");
  });

  // Displays manufacturers with and without diacritics in the name.
  it("should display manufacturers with and without diacritics in the name", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Citroen");

    // Assert
    expect(screen.getAllByRole("option")).toHaveLength(1);
    expect(screen.getByRole("option")).toHaveTextContent("Citroen");
  });

  // Resets the search query when a manufacturer is selected from the dropdown list.
  it("should reset the search query when a manufacturer is selected from the dropdown list", () => {
    // Arrange
    const manufacturer = "";
    const setManufacturer = jest.fn();

    render(
      <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Audi");

    // Act
    userEvent.click(screen.getByText("Audi"));

    // Assert
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
});
