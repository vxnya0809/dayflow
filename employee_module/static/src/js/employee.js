/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, onMounted } from "@odoo/owl";

class EmployeeDashboard extends Component {

    setup() {
        onMounted(() => {
            this.startAnimations();
        });
    }

    startAnimations() {
        const cards = document.querySelectorAll(
            ".dayflow-dashboard-card"
        );

        cards.forEach((card) => {

            card.addEventListener("mousemove", (event) => {

                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 15;
                const rotateY = (centerX - x) / 15;

                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-6px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "";
            });
        });
    }
}

EmployeeDashboard.template =
    "employee_module.EmployeeDashboard";

registry
    .category("actions")
    .add(
        "employee_dashboard",
        EmployeeDashboard
    );