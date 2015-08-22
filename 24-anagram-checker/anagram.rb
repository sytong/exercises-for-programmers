module Anagram
  def isAnagram(word1, word2)
    ref = word2.clone
    word1.each_char do |c|
      idx = ref.index(c)
      ref.slice!(idx) unless idx.nil?
    end
    ref.empty?
  end
  module_function :isAnagram
end