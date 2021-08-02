class TeamsController < ApplicationController

  def index
    render json: Team.all.map {|team| TeamSerializer.new(team)}
  end

  def create
    team = Team.new(team_params)
    if team.save
      render json: TeamSerializer.new(team)
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