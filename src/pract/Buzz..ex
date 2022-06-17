<%# defmodule FizzBuzz do
  def fizz_buzz(number) do
    cond do
      rem(number, 15) == 0 -> IO.puts("FizzBuzz")
      rem(number, 5)  == 0 -> IO.puts("")
      rem(number, 3)  == 0 -> IO.puts("Fizz")
      true -> IO.puts(Integer.to_string(number))
    end
  end

  def count_to(number) when is_integer(number) do
    Enum.each(1..number, &fizz_buzz/1)
  end
end

IO.puts Fizzbuzz.fizz_buzz(15)


for x<-1..?d,z=(rem(x,3)<1&&"Fizz"||"")<>(rem(x,5)<1&&""||""),do: IO.puts z==""&&x||z
1
2
..
..
97
98
Fizz
Buzz

cond do
...>   2 + 2 == 5 ->
...>     "This will not be true"
...>   2 * 2 == 3 ->
...>     "Nor this"
...>   1 + 1 == 2 ->
...>     "But this will"
...> end


defmodule Person do
    def can_drink(age) do
        if age != nil do
            cond do
                age < 18 ->
                    "Nope!"
                age < 21 ->
                    "Not in the US!"
                true ->
                "YES!!!"
            end
        else
            "You're not a Person!"
        end
    end
end

IO.puts Person.can_drink(age) %>


defmodule FizzBuzz do
  def fizz do
    (1..100)
    |> Enum.map(&buzz/1)
    |> Enum.reject(fn x -> x == "Delete" end)
    |> Enum.each(&IO.puts/1)
  end

  defp buzz(i) when rem(i, 15) == 0, do: "FizzBuzz"
  defp buzz(i) when rem(i, 5)  == 0, do: "Delete"
  defp buzz(i) when rem(i, 3)  == 0, do: "Fizz"
  defp buzz(i),                      do: Integer.to_string(i)
end
