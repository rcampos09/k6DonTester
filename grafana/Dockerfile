FROM grafana/grafana:7.4.0

# Provisioning dashboar and configuration
COPY ./provisioning/dashboards/dashboard.yaml /etc/grafana/provisioning/dashboards/dashboard.yaml
COPY ./provisioning/dashboards/*.json /var/lib/grafana/dashboards/

# Provisioning datasource and configuration
COPY ./provisioning/datasources/datasource.yaml /etc/grafana/provisioning/datasources/datasource.yaml
