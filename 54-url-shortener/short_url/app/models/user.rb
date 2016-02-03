class User
  include Redis::Objects
  include DataMapper::Resource

  # datamapper fields, just used for .create
  property :id, Serial
  property :email, String

  # user redis-objects fields for everything else
  value :disabled
  value :name
  list :cart, :marshal => true

end

# absolutely need this for dm-redis
User.finalize