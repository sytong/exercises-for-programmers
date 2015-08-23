require_relative './adder'

print "How many number do you want to add? "
n = gets.strip.to_i

@adder = Adder.new n
@adder.run

puts "The total is #{@adder.total}."
