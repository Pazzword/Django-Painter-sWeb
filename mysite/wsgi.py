
import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

application = get_wsgi_application()


'''import os
import sys

# Add your project directory to the sys.path
project_home = u'/home/pashaev/pashaev.pythonanywhere.com'
if project_home not in sys.path:
    sys.path = [project_home] + sys.path

# Set the settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'mysite.settings'

# Activate your virtual env
activate_this = '/home/pashaev/.virtualenvs/pashaev.pythonanywhere.com/bin/activate_this.py'
exec(open(activate_this).read(), dict(__file__=activate_this))

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()'''