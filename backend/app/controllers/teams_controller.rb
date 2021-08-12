class TeamsController < ApplicationController

  def index
    teams = Team.all
    render json: teams, include: :players
  end

  def create
    team = Team.new(team_params)
    if team.save
      render json: team, include: :players
    end
  end

  def destroy
    team = Team.find_by(id: params[:id])
    team.destroy
  end

  private
   
    def team_params
      params.require(:team).permit(:name)
    end
end