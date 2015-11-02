def find_question
	@question = Question.find(params[:question_id])
end

def find_answer
	@answer = Answer.find(params[:answer_id])
end

def find_comment
	@comment = Comment.find(params[:comment_id])
end