"use client";

import { Accordion } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { RuleEntry } from "@/components/rule-entry";
import type { RuleGroup as RuleGroupType } from "@/lib/types";

interface RuleGroupProps {
  group: RuleGroupType;
  groupIndex: number;
  accentColor?: string;
}

export function RuleGroup({ group, groupIndex, accentColor }: RuleGroupProps) {
  return (
    <section>
      {(group.title || group.subtitle) && (
        <div className="mb-3">
          {group.title && (
            <h3
              className="font-display text-lg font-semibold"
              style={{ color: accentColor }}
            >
              {group.title}
            </h3>
          )}
          {group.subtitle && (
            <p className="text-sm text-muted-foreground mt-1">
              {group.subtitle}
            </p>
          )}
          <Separator className="mt-3" />
        </div>
      )}
      <Accordion type="multiple" className="w-full">
        {group.rules.map((rule, ruleIndex) => (
          <RuleEntry
            key={ruleIndex}
            rule={rule}
            index={groupIndex * 1000 + ruleIndex}
            accentColor={accentColor}
          />
        ))}
      </Accordion>
    </section>
  );
}
