class TeamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :players
end
