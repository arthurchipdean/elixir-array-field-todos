defmodule Todos.UserTest do
  use Todos.ModelCase

  alias Todos.User

  @valid_attrs %{date_of_birth: %{day: 17, hour: 14, min: 0, month: 4, sec: 0, year: 2010}, email: "some content", name: "some content", todos: []}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end
end
