class TeamsController < ApplicationController

  def index
    teams = Team.all
    render json: teams
  end

  def create
    team = Team.new(team_params)
    if team.save
      render json: team
    end
  end

  def destroy
    team = Team.find_by(id: params[:id])
    team.destroy
  end

  private
   
    def set_team
      team = Team.find(params[:id])
    end

    def team_params
      params.require(:team).permit(:name)
    end
end