require 'minitest/autorun'
require_relative '../adder'

class TestAdder < Minitest::Test

  def test_prompt_5_times
    @adder = Adder.new 5
    count = 0
    @adder.stub :prompt, -> { count += 1 } do
      @adder.run
    end
    assert_equal 5, count
  end

  def test_add_3_numbers
    @adder = Adder.new 3
    n = 0
    @adder.stub :get_input, -> { n += 1; return n.to_s } do
      @adder.run
    end
    assert_equal 6, @adder.total
  end

  def test_add_5_numbers_with_error_input
    @adder = Adder.new 5
    numbers = ['10','a','20','b','30']
    @adder.stub :get_input, -> { return numbers.pop } do
      @adder.run
    end
    assert_equal 60, @adder.total
  end
end