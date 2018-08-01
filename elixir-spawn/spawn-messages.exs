defmodule SimpleProcess do
  def call(number, previous_pid) do
    IO.inspect "Spawned #{inspect(self())} (number #{number}) by #{inspect(previous_pid)}"

    receive do
      {:increment, integer} ->
        IO.inspect "Received payload #{integer}"
        if previous_pid, do: send(previous_pid, {:increment, integer + 1})
    end
  end
end

defmodule Spawner do
  def call(number \\ 0, previous_pid \\ nil) do
    case number > 10 do
      true ->
        IO.inspect("Spawned Processes")
        IO.inspect("Sending Increment Message")
        send(previous_pid, {:increment, 0})
        IO.inspect("Spawner Exiting")
      false ->
        current_pid = spawn_link(SimpleProcess, :call, [number, previous_pid])
        call(number + 1, current_pid)
    end
  end
end

IO.inspect spawn(&Spawner.call/0)
