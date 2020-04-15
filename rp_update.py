from git import Repo
from datetime import datetime
import os

class RepUpdater(object):
    def __init__(self):
        pass

    def git_push(self, path_repo=os.path.dirname(os.path.abspath(__file__))+'/.git', commit_msg=None):
        print(path_repo)
        if commit_msg is None:
            now = datetime.now()
            commit_msg = 'Data_update '+ now.strftime("%m/%d/%Y, %H:%M:%S")
        
        repo = Repo(path_repo)
        repo.git.add(u=True)
        repo.index.commit(commit_msg)
        origin = repo.remote(name='origin')
        origin.push()

