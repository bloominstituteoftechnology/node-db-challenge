from app import ma
from app.models.project import Project


class ProjectSchema(ma.ModelSchema):
    class Meta:
        model = Project