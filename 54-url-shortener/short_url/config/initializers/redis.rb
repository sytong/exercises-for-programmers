#config/initializers/redis.rb
require 'redis'
require 'redis/objects'
require 'connection_pool'

REDIS_CONFIG = YAML.load(File.open(Rails.root.join("config/redis.yml"))).symbolize_keys
default = REDIS_CONFIG[:default].symbolize_keys
config = default.merge(REDIS_CONFIG[Rails.env.to_sym].symbolize_keys) if REDIS_CONFIG[Rails.env.to_sym]

$redis = ConnectionPool.new(size: 5, timeout: 5) { Redis.new(config) }
Redis::Objects.redis = $redis

DataMapper.setup(:default, {:adapter  => "redis"})

# To clear out the db before each test
#$redis.flushdb if Rails.env = "test"