defmodule Todos.PageController do
  use Todos.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
