from app import db

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), index=True)
    description = db.Column(db.String(400))
    completed = db.Column(db.Boolean, nullable=False, default=False)
    actions = db.relationship('Action', backref='project', lazy=True)

    def __repr__(self):
        return f'<Project {self.id} - {self.name}>'

    @classmethod
    def find_by_id(cls, id):
        return cls.query.filter_by(id=id).first()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()