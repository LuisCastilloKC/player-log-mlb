class PlayersController < ApplicationController
    #before_action :set_player, only: [:show, :update, :destroy]
    
    # GET /players
    def index
        players = Player.all
        render json: players
    end
    
  
    # GET /players/1
    def show
      player = Player.find_by(id: params[:id])
      render json: player
    end
  
    # POST /players
    def create
      player = Player.new(player_params)
      if player.save
        render json: player
      end
    end
  
    
    # DELETE /players/1
    def destroy
      player = Player.find_by(id: params[:id])
      player.destroy
     #byebug
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_player
        player = Player.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def player_params
        params.require(:player).permit(:name, :team_id)
      end

end
