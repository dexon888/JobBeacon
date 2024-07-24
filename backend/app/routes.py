from flask import Blueprint, request, jsonify
import subprocess

main = Blueprint('main', __name__)


@main.route('/api/upload', methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['resume']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    file_path = f'tmp/{file.filename}'
    file.save(file_path)
    result = subprocess.run(
        ['python', 'parse_resume.py', file_path], capture_output=True, text=True)
    if result.returncode != 0:
        return jsonify({'error': 'Error parsing resume'}), 500
    return jsonify({'message': 'Resume parsed successfully', 'output': result.stdout})
