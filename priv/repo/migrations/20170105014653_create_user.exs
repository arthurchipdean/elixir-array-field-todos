defmodule Todos.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string
      add :email, :string
      add :date_of_birth, :datetime
      add :todos, {:array, :string}

      timestamps()
    end

  end
end
