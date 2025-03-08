"""empty message

Revision ID: aed710af2eb0
Revises: 8225724467e5
Create Date: 2025-03-08 01:02:20.318738

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'aed710af2eb0'
down_revision = '8225724467e5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tasks',
    sa.Column('taskId', sa.Integer(), nullable=False),
    sa.Column('tittle', sa.String(), nullable=False),
    sa.Column('taskContent', sa.String(), nullable=False),
    sa.Column('pid', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['pid'], ['people.pid'], name='fk_task_pid'),
    sa.PrimaryKeyConstraint('taskId')
    )
    with op.batch_alter_table('topic', schema=None) as batch_op:
        batch_op.drop_constraint('fk_topic_pid', type_='foreignkey')
        batch_op.create_foreign_key('fk_topic_pid', 'people', ['pid'], ['pid'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('topic', schema=None) as batch_op:
        batch_op.drop_constraint('fk_topic_pid', type_='foreignkey')
        batch_op.create_foreign_key('fk_topic_pid', 'people', ['pid'], ['pid'], onupdate='CASCADE', ondelete='CASCADE')

    op.drop_table('tasks')
    # ### end Alembic commands ###
