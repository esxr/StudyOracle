resource "aws_appautoscaling_target" "studyoracle_server" {
  max_capacity       = 1000
  min_capacity       = 1
  resource_id        = "service/studyoracle/studyoracle"
  scalable_dimension = "ecs:service:DesiredCount"
  service_namespace  = "ecs"
}

resource "aws_appautoscaling_policy" "studyoracle_server-cpu" {
  name               = "studyoracle_server-cpu"
  policy_type        = "TargetTrackingScaling"
  resource_id        = aws_appautoscaling_target.studyoracle_server.resource_id
  scalable_dimension = aws_appautoscaling_target.studyoracle_server.scalable_dimension
  service_namespace  = aws_appautoscaling_target.studyoracle_server.service_namespace
  target_tracking_scaling_policy_configuration {
    predefined_metric_specification {
      predefined_metric_type = "ECSServiceAverageCPUUtilization"
    }
    target_value = 50
  }
}
