from flask import jsonify, request
from app.api import bp
from app.models.project import Project
from app.schemas.project_schema import ProjectSchema


project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)

@bp.route('/')
def sanity():
    return jsonify({'message': 'It works!'})


@bp.route('/projects')
def get_all_projects():
    projects = projects_schema.dump(Project.query.all()).data

    return jsonify(projects)


@bp.route('/projects/<id>')
def get_project(id):
    project = Project.find_by_id(id=id)
    print('project', project)

    if project is None:
        return jsonify({'message': 'Project not found'}), 404

    project = project_schema.dump(project).data

    return jsonify(project)


@bp.route('/projects', methods=['POST'])
def create_project():
    project = project_schema.load(request.get_json()).data
    project.save()
    project = project_schema.dump(project).data

    return jsonify(project), 201


@bp.route('/projects/<id>', methods=['DELETE'])
def delete_project(id):
    project = Project.find_by_id(id=id)

    if project is None:
        return jsonify({'message': 'Project not found'}), 404

    project.delete()

    return jsonify({'message': 'Deletion succesful'})