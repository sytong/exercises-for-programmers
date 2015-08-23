class Adder
  attr_reader :total

  def initialize(count)
    @count = count
    @total = 0
  end

  def get_input
    gets.strip
  end

  def prompt
    print "Enter a number: "
    n = Integer(get_input) rescue 0
    @total += n
  end

  def run
    @count.times do 
      prompt
    end
  end
end