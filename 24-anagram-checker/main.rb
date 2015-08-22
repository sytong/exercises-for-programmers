require_relative './anagram'

puts "Enter two strings and I'll tell you if they are anagrams:"

print'Enter the first string: '
word1 = gets.strip

print 'Enter the second string: '
word2 = gets.strip

key_phrase = ( Anagram.isAnagram(word1, word2) ? 'are' : 'are not' )

puts "\"#{word1}\" and \"#{word2}\" #{key_phrase} anagrams."