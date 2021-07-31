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
  
    def destroy
      player = Player.find_by(id: params[:id])
      player.destroy
    end
  
    private
      
      def set_player
        player = Player.find(params[:id])
      end
  
      
      def player_params
        params.require(:player).permit(:name, :team_id)
      end

end
