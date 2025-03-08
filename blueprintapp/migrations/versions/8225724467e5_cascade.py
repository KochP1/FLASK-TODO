"""Cascade

Revision ID: 8225724467e5
Revises: 760d4120c056
Create Date: 2025-03-07 16:56:35.652720

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8225724467e5'
down_revision = '760d4120c056'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('todos', schema=None) as batch_op:
        batch_op.drop_constraint('fk_todo_topid', type_='foreignkey')
        batch_op.create_foreign_key('fk_todo_topid', 'topic', ['topId'], ['topId'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('todos', schema=None) as batch_op:
        batch_op.drop_constraint('fk_todo_topid', type_='foreignkey')
        batch_op.create_foreign_key('fk_todo_topid', 'topic', ['topId'], ['topId'], onupdate='CASCADE', ondelete='CASCADE')

    # ### end Alembic commands ###
