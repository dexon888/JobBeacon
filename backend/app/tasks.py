from celery import Celery
import os

celery = Celery(__name__, broker=os.environ.get(
    'REDIS_URL', 'redis://localhost:6379/0'))


@celery.task
def scrape_jobs():
    # Your scraping logic here
    pass
