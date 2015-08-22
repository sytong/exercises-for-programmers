require 'minitest/autorun'
require_relative '../anagram'

class TestAnagram < Minitest::Test

  def test_note_tone_positive
    assert_equal(true, Anagram.isAnagram('note','tone'))
  end

  def test_note_tune_negative
    assert_equal(false, Anagram.isAnagram('note','tune'))
  end

  def test_one_char_positive
    assert_equal(true, Anagram.isAnagram('a','a'))
  end

  def test_one_char_positive
    assert_equal(false, Anagram.isAnagram('a','b'))
  end

  def test_empty_positive
    assert_equal(true, Anagram.isAnagram('',''))
  end

  def test_dup_meet_teem_positive
    assert_equal(true, Anagram.isAnagram('meet','teem'))
  end

  def test_dup_meet_teem_negative
    assert_equal(false, Anagram.isAnagram('meet','teen'))
  end

  def test_diff_length_negative
    assert_equal(false, Anagram.isAnagram('meet', 'meets'))
  end
end