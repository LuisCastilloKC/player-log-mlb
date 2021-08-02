class PlayersController < ApplicationController
    
    def index
        players = Player.all
        render json: players
    end
    
    def create
      player = Player.new(player_params)
      if player.save
        render json: player
      end
    end
  
    private
       
      def player_params
        params.require(:player).permit(:name, :team_id)
      end

end
