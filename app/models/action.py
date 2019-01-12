from app import db


class Action(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(400))
    notes = db.Column(db.String(400))
    completed = db.Column(db.Boolean, default=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)

    def __repr__(self):
        return f'<Action {self.id} - {self.name}>'

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id).first()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()