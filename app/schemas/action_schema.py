from app import ma
from app.models.action import Action 

class ActionSchema(ma.ModelSchema):
    class Meta:
        model = Action
